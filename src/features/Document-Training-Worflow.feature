Feature: Document training workflow

  As an EQMS user  
  I want approved documents to trigger required training  
  So that users can review and complete their assigned training tasks
  
  Background:
    Given the test data uses a unique document title

  @e2e
  Scenario: Create a document, route it through approval, and complete all related training logs
    Given "demo" is logged into the application
    And "demo" opens the "Documents" process in the "Document Control" module
    And "demo" starts a new document record

    When "demo" enters the document details
      | documentType | effectiveDate | file              |
      | General Documents | today | testDoc          |

    And "demo" sets skill options    
      
    And "demo" saves the document in "DRAFT" state

    And "demo" sets training event creation

    And "demo" adds the following training roles
      | trainingRole      | requiredRating |
      | Internal Auditor  | Very Good      |

    And "demo" adds the following skill training questions
      | question                           | answerChoiceSet         | state   |
      | Have you reviewed the document?    | Auditing - Pass/Fail    | ACTIVE  |

    Then the document should contain the following training roles
      | trainingRole     |
      | Internal Auditor |

    And the document should contain the following skill training questions
      | question                        |
      | Have you reviewed the document? |   

    And "demo" submits the document for "AWAITING APPROVAL"

    And the following users approve the document
      | user    | comment                  |
      | mgrDoc  | Approving the document   |
      | demo    | Approving the document   |

    Then the document should contain a generated training event
    
    And "demo" opens the generated training event

    When the following users complete their assigned training logs
      | user     | answer | comment                        | approvalComment              |
      | mgrDoc   | Pass   | I have reviewed the document   | Approving the training log   |
      | mgrDoc2  | Pass   | I have reviewed the document   | Approving the training log   |
      | quality1 | Pass   | I have reviewed the document   | Approving the training log   |
      | Audit    | Pass   | I have reviewed the document   | Approving the training log   |
      | quality  | Pass   | I have reviewed the document   | Approving the training log   |

    Then the training event should be in "Closed" state