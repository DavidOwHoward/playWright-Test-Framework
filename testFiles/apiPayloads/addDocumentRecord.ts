import { faker } from '@faker-js/faker';

const d: Date = new Date();
const title: string = faker.word.words(10)


export const docPayload = {
    "processSystemName": "Documents_p",
    "itemId": 0,
    "originalRecordId": 0,
    "isDuplicate": false,
    "versionInfo": {
        "versionNumber": "1",
        "versionDate": "2026-03-22T09:28:31.793",
        "versionParentId": 0,
        "versionMasterId": 0,
        "officialStateId": 3211
    },
    "dependentProcesses": [],
    "fields": [
        {
            "systemName": "DocumentTitle_f",
            "displayName": "Document Title",
            "prompt": "Enter Document Title",
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
                "maximumLength": 500,
                "minimumLength": 0,
                "maskType": "None",
                "numberOfCharacters": 500,
                "numberOfRows": 1,
                "isRichText": false,
                "allowLocalizedData": false,
                "errorMessage": "The Document Title value cannot exceed 500 characters."
            },
            "value": title
        },
        {
            "systemName": "DocumentType_f",
            "displayName": "Document Type",
            "prompt": "Enter Document Type",
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
                "processSystemName": "DocumentTypes_p",
                "fieldName": "DisplayExpression_f",
                "displayFieldList": "DocumentTypeCode_f|DocumentType_f",
                "allowAddNew": false,
                "allowClear": false,
                "allowViewDetail": false,
                "relatedProcesses": [
                    {
                        "allowBatchProcessing": true,
                        "canCreate": true,
                        "defaultCultureName": "en-US",
                        "displayName": "Document Types",
                        "name": "DocumentTypes_p"
                    }
                ]
            },
            "value": 11
        },
        {
            "systemName": "EffectiveDate_f",
            "displayName": "Effective Date",
            "prompt": "Enter Effective Date",
            "fieldType": "DateTime",
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
                "format": "Date",
                "patterns": [
                    "MM/dd/yyyy"
                ]
            },
            "value": d.toDateString()
        }
    ],
    "lastModifiedOn": d
}