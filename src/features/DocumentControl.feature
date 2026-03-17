@documentControl
Feature: Document Control

  Scenario: User submits a draft document for approval
    Given a document exists in the Draft state
    When the user submits the document for approval
    Then the document should be in Awaiting Approval state

  Scenario: The document is approved by the approvers
    Given a document exists in Awaiting Approval state
    When each approver logs in and approves the record
    Then the document record should be in Official state

  Scenario: Approver rejects a document under review
    Given a document exists in Awaiting Approval state
    When the approver rejects the document
    Then the document should be in Approval Rejected state

  Scenario Outline: User handles a rejected document
    Given a document exists in Approval Rejected state
    When the user sends the document to "<targetState>"
    Then the document should be in "<targetState>" state

    Examples:
      | targetState       |
      | Draft             |
      | Awaiting Approval |