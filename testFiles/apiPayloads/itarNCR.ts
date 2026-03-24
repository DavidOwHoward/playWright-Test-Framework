import { faker } from '@faker-js/faker';

const d: Date = new Date();
const lot: string = faker.word.words(3);

export const itarNCRPayload = {
    "processSystemName": "Nonconformances_p",
    "itemId": 0,
    "originalRecordId": 0,
    "isDuplicate": false,
    "dependentProcesses": [],
    "fields": [
        {
            "systemName": "Category_f",
            "displayName": "Category",
            "prompt": "Enter Category",
            "fieldType": "Reference",
            "expressionType": "None",
            "isHidden": false,
            "isRequired": false,
            "isDocumentationAvailable": true,
            "canRead": true,
            "canWrite": true,
            "column": 0,
            "rowSpan": 1,
            "width": 25,
            "settings": {
                "processSystemName": "NonconformancesCategory_p",
                "fieldName": "Category_f",
                "displayFieldList": "Category_f",
                "allowAddNew": false,
                "allowClear": false,
                "allowViewDetail": true,
                "relatedProcesses": [
                    {
                        "allowBatchProcessing": true,
                        "canCreate": false,
                        "defaultCultureName": "en-US",
                        "displayName": "NCR and CAPA Category",
                        "name": "NonconformancesCategory_p"
                    }
                ]
            },
            "value": 3
        },
        {
            "systemName": "ProblemCategory_f",
            "displayName": "Problem Source",
            "prompt": "Enter Problem Source",
            "fieldType": "Reference",
            "expressionType": "None",
            "isHidden": false,
            "isRequired": false,
            "isDocumentationAvailable": true,
            "canRead": true,
            "canWrite": true,
            "column": 0,
            "rowSpan": 1,
            "width": 25,
            "settings": {
                "processSystemName": "ProblemCategory_p",
                "fieldName": "DisplayExpression_f",
                "displayFieldList": "ProblemCategoryCode_f|ProblemCategory_f",
                "allowAddNew": false,
                "allowClear": true,
                "allowViewDetail": true,
                "relatedProcesses": [
                    {
                        "allowBatchProcessing": true,
                        "canCreate": false,
                        "defaultCultureName": "en-US",
                        "displayName": "Problem Sources",
                        "name": "ProblemCategory_p"
                    }
                ]
            },
            "value": 3
        },
        {
            "systemName": "ProblemSymptom_f",
            "displayName": "Problem Symptom",
            "prompt": "Enter Problem Symptom",
            "fieldType": "Reference",
            "expressionType": "None",
            "isHidden": false,
            "isRequired": false,
            "isDocumentationAvailable": true,
            "canRead": true,
            "canWrite": true,
            "column": 0,
            "rowSpan": 1,
            "width": 25,
            "settings": {
                "processSystemName": "ProblemSymptoms_p",
                "fieldName": "DisplayExpression_f",
                "displayFieldList": "ProblemSymptomCode_f|ProblemSymptom_f",
                "allowAddNew": false,
                "allowClear": true,
                "allowViewDetail": false,
                "relatedProcesses": [
                    {
                        "allowBatchProcessing": true,
                        "canCreate": false,
                        "defaultCultureName": "en-US",
                        "displayName": "Problem Symptoms",
                        "name": "ProblemSymptoms_p"
                    }
                ]
            },
            "value": 1
        },
        {
            "systemName": "ProblemSeverity_f",
            "displayName": "Problem Severity",
            "prompt": "Enter Problem Severity",
            "fieldType": "Reference",
            "expressionType": "None",
            "isHidden": false,
            "isRequired": false,
            "isDocumentationAvailable": true,
            "canRead": true,
            "canWrite": true,
            "column": 0,
            "rowSpan": 1,
            "width": 25,
            "settings": {
                "processSystemName": "ProblemSeverities_p",
                "fieldName": "DisplayExpression_f",
                "displayFieldList": "ProblemSeverityCode_f|ProblemSeverity_f",
                "allowAddNew": false,
                "allowClear": true,
                "allowViewDetail": true,
                "relatedProcesses": [
                    {
                        "allowBatchProcessing": true,
                        "canCreate": false,
                        "defaultCultureName": "en-US",
                        "displayName": "Problem Severities",
                        "name": "ProblemSeverities_p"
                    }
                ]
            },
            "value": 1
        },
        {
            "systemName": "FailedItem_f",
            "displayName": "Failed Item",
            "prompt": "Enter Failed Item",
            "fieldType": "Reference",
            "expressionType": "None",
            "isHidden": false,
            "isRequired": true,
            "isDocumentationAvailable": true,
            "canRead": true,
            "canWrite": true,
            "column": 0,
            "rowSpan": 1,
            "width": 25,
            "settings": {
                "processSystemName": "Items_p",
                "fieldName": "DisplayExpression_f",
                "displayFieldList": "ItemType_f|ItemNumber_f|ItemDescription_f",
                "allowAddNew": false,
                "allowClear": false,
                "allowViewDetail": true,
                "relatedProcesses": [
                    {
                        "allowBatchProcessing": true,
                        "canCreate": true,
                        "defaultCultureName": "en-US",
                        "displayName": "Items",
                        "name": "Items_p"
                    }
                ]
            },
            "value": 578
        },
        {
            "systemName": "Item_f",
            "displayName": "Finished Item",
            "prompt": "Enter Finished Item",
            "fieldType": "Reference",
            "expressionType": "None",
            "isHidden": false,
            "isRequired": true,
            "isDocumentationAvailable": true,
            "canRead": true,
            "canWrite": true,
            "column": 0,
            "rowSpan": 1,
            "width": 25,
            "settings": {
                "processSystemName": "Items_p",
                "fieldName": "DisplayExpression_f",
                "displayFieldList": "ItemType_f|ItemNumber_f|ItemDescription_f",
                "allowAddNew": false,
                "allowClear": false,
                "allowViewDetail": true,
                "relatedProcesses": [
                    {
                        "allowBatchProcessing": true,
                        "canCreate": true,
                        "defaultCultureName": "en-US",
                        "displayName": "Items",
                        "name": "Items_p"
                    }
                ]
            },
            "value": 578
        },
        {
            "systemName": "Quantity_f",
            "displayName": "Quantity",
            "prompt": "Enter Quantity",
            "fieldType": "Numeric",
            "expressionType": "None",
            "isHidden": false,
            "isRequired": true,
            "isDocumentationAvailable": true,
            "canRead": true,
            "canWrite": true,
            "column": 0,
            "rowSpan": 1,
            "width": 25,
            "settings": {
                "displayFormat": "Numeric",
                "max": "79228162514264337593543950335",
                "min": "-79228162514264337593543950335",
                "numberOfDecimals": 1
            },
            "value": 1
        },
        {
            "systemName": "SerialNumber_f",
            "displayName": "Lot/Serial Number",
            "prompt": "Enter Lot/Serial Number",
            "fieldType": "String",
            "expressionType": "None",
            "isHidden": false,
            "isRequired": true,
            "isDocumentationAvailable": true,
            "canRead": true,
            "canWrite": true,
            "column": 0,
            "rowSpan": 1,
            "width": 25,
            "settings": {
                "maximumLength": 200,
                "minimumLength": 0,
                "maskType": "None",
                "numberOfCharacters": 200,
                "numberOfRows": 1,
                "isRichText": false,
                "allowLocalizedData": false,
                "errorMessage": "The Lot/Serial Number value cannot exceed 200 characters."
            },
            "value": lot
        },
        {
            "systemName": "Process_f",
            "displayName": "Process",
            "prompt": "Enter Process",
            "fieldType": "Reference",
            "expressionType": "None",
            "isHidden": false,
            "isRequired": true,
            "isDocumentationAvailable": true,
            "canRead": true,
            "canWrite": true,
            "column": 0,
            "rowSpan": 1,
            "width": 50,
            "settings": {
                "processSystemName": "Processes_p",
                "fieldName": "DisplayExpression_f",
                "displayFieldList": "ProcessCode_f|ProcessName_f",
                "allowAddNew": false,
                "allowClear": false,
                "allowViewDetail": true,
                "relatedProcesses": [
                    {
                        "allowBatchProcessing": true,
                        "canCreate": true,
                        "defaultCultureName": "en-US",
                        "displayName": "Processes",
                        "name": "Processes_p"
                    }
                ]
            },
            "value": 2
        }
    ],
    "lastModifiedOn": d
}