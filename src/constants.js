import {
    FINISHED_INFOBOX, FINISHED_STEP_NAME,
    FINISHED_STEP_TEXT,
    FINISHED_SUBTITLE,
    FINISHED_TITLE,
    MAPPING_INFOBOX, MAPPING_STEP_NAME,
    MAPPING_STEP_TEXT,
    MAPPING_SUBTITLE,
    MAPPING_TITLE,
    METADATA_INFOBOX, METADATA_STEP_NAME,
    METADATA_STEP_TEXT,
    METADATA_SUBTITLE,
    METADATA_TITLE,
    SELECT_OBJECTS_INFOBOX, SELECT_OBJECTS_STEP_NAME,
    SELECT_OBJECTS_STEP_TEXT,
    SELECT_OBJECTS_SUBTITLE,
    SELECT_OBJECTS_TITLE,
    SELECT_TYPE_INFOBOX, SELECT_TYPE_STEP_NAME,
    SELECT_TYPE_STEP_TEXT,
    SELECT_TYPE_SUBTITLE,
    SELECT_TYPE_TITLE,
    UPLOAD_FILE_INFOBOX, UPLOAD_FILE_STEP_NAME,
    UPLOAD_FILE_STEP_TEXT,
    UPLOAD_FILE_SUBTITLE,
    UPLOAD_FILE_TITLE,
} from './EN_Texts';

export const ROUTE_MAIN = '/';
export const ROUTE_SELECT_TYPE = '/type';
export const ROUTE_SELECT_OJECTS = '/objects';
export const ROUTE_UPLOAD_FILE = '/upload';
export const ROUTE_MAPPING = '/mapping';
export const ROUTE_METADATA = '/metadata';
export const ROUTE_FINISHED = '/finished';

export const STEPS = [
    {
        index: 0,
        name: SELECT_TYPE_STEP_NAME,
        text: SELECT_TYPE_STEP_TEXT,
        title: SELECT_TYPE_TITLE,
        subtitle: SELECT_TYPE_SUBTITLE,
        infobox: SELECT_TYPE_INFOBOX,
        selectables: [
            {
                name: 'File from computer',
                value: 'file',
                text: 'Upload any CSV, XLS, or XLSX files with entity information.',
                image: 'https://static.hsappstatic.net/ui-images/static-2.312/optimized/import-file.svg',
            },
            {
                name: 'Stream from an endpoint',
                value: 'stream',
                text: 'Import a URL pointing to a data stream (IOT sensors, data APIs etc.)',
                image: 'https://static.hsappstatic.net/ui-images/static-2.312/optimized/import-opt-out-list.svg',
            },
        ],
        route: ROUTE_SELECT_TYPE,
    },
    {
        index: 1,
        name: SELECT_OBJECTS_STEP_NAME,
        text: SELECT_OBJECTS_STEP_TEXT,
        title: SELECT_OBJECTS_TITLE,
        subtitle: SELECT_OBJECTS_SUBTITLE,
        infobox: SELECT_OBJECTS_INFOBOX,
        selectables: [
            {
                name: 'Incidents',
                value: 'incidents',
                text: 'Incidents that have happened to various kinds of food.',
                image: 'https://static.hsappstatic.net/ui-images/static-2.313/optimized/contacts.svg',
            },
            {
                name: 'Companies',
                value: 'companies',
                text: 'The businesses you work with, which are commonly called accounts or organizations.',
                image: 'https://static.hsappstatic.net/ui-images/static-2.313/optimized/companies.svg',
            },
            {
                name: 'Prices',
                value: 'prices',
                text: 'Current price for specific products.',
                image: 'https://static.hsappstatic.net/ui-images/static-2.313/optimized/deals-small.svg',
            },
            {
                name: 'Extra Info',
                value: 'extra',
                text: 'Anything that cannot be described by the categories listed.',
                image: 'https://static.hsappstatic.net/ui-images/static-2.313/optimized/note-widget.svg',
            },
        ],
        route: ROUTE_SELECT_OJECTS,
    },
    {
        index: 2,
        name: UPLOAD_FILE_STEP_NAME,
        text: UPLOAD_FILE_STEP_TEXT,
        title: UPLOAD_FILE_TITLE,
        subtitle: UPLOAD_FILE_SUBTITLE,
        infobox: UPLOAD_FILE_INFOBOX,
        route: ROUTE_UPLOAD_FILE,
    },
    {
        index: 3,
        name: MAPPING_STEP_NAME,
        text: MAPPING_STEP_TEXT,
        title: MAPPING_TITLE,
        subtitle: MAPPING_SUBTITLE,
        infobox: MAPPING_INFOBOX,
        route: ROUTE_MAPPING,
    },
    {
        index: 4,
        name: METADATA_STEP_NAME,
        text: METADATA_STEP_TEXT,
        title: METADATA_TITLE,
        subtitle: METADATA_SUBTITLE,
        infobox: METADATA_INFOBOX,
        route: ROUTE_METADATA,
    },
    {
        index: 5,
        name: FINISHED_STEP_NAME,
        text: FINISHED_STEP_TEXT,
        title: FINISHED_TITLE,
        subtitle: FINISHED_SUBTITLE,
        infobox: FINISHED_INFOBOX,
        route: ROUTE_FINISHED,
    },
];
