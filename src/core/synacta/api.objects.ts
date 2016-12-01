import { JsonProperty } from 'json-typescript-mapper';

/**
 * This object provides all functionality of the Synacta API
 * All other objects are a subset of this Interface.
 * TODO - find out which fields are optional
 */
export class GenericBaseEntity {
    Properties: any;
    PropertyInfos: any;
    ID: string;
    ObjectType: string;
    ParentID: string;
    ParentType: string;
    IsVirtual: boolean;
    Frozen: boolean;
    HasChild: boolean;
    CheckedOutBy: string;
    Version: string;
    Hash: string;

    // API Specific Fields
    @JsonProperty('@odata.readLink')
    ReadLink: string;
    @JsonProperty('@odata.nextLink')
    NextLink: string;
    @JsonProperty('Child@odata.navigationLink')
    ChildLink: string;
    @JsonProperty('FullODataLink@odata.navigationLink')
    FullODataLink: string;
    @JsonProperty('StandardODataLink@odata.navigationLink')
    StandardODataLink: string;
    @JsonProperty('NoneODataLink@odata.navigationLink')
    NoneODataLink: string;
    @JsonProperty('Parent@odata.navigationLink')
    ParentLink: string;
    @JsonProperty('@odata.context')
    Context: string;
    @JsonProperty('@odata.count')
    Count: number;
    @JsonProperty('Document@odata.navigationLink')
    Document: string;
    @JsonProperty('@odata.editLink')
    EditLink: string;
    @JsonProperty('@odata.etag')
    ETag: string;
    @JsonProperty('@odata.metadataEtag')
    MetadataETag: string;
    @JsonProperty('@odata.PicklistLink')
    PicklistLink: string;
}

/**
 * This object is either a container or a document
 */
export class Entity {
    Properties: any;
    PropertyInfos: any;
    ID: string;
    ObjectType: string;
    ParentID: string;
    ParentType: string;
    Frozen: boolean;
    Hash: string;

    // API Specific Fields
    @JsonProperty('@odata.readLink')
    ReadLink: string;
    @JsonProperty('FullODataLink@odata.navigationLink')
    FullODataLink: string;
}

/**
 * Under a simple interface this object 
 * is a transmission frame with only a
 * value array containing any type
 * 
 * It should be used to access the raw json
 * data that is within the frame
 */
export interface IFrame {
    value: any[];
}

/**
 * This object is a transmission frame
 * with message and navigation metadata
 */
export class Frame {
    value: Entity[];

    // API Specific Fields
    @JsonProperty('@odata.context')
    Context: string;
    @JsonProperty('@odata.count')
    Count: number;
    @JsonProperty('Document@odata.navigationLink')
    Document: string;
    @JsonProperty('@odata.editLink')
    EditLink: string;
}

/**
 * This object provides container specific properties and functions
 */
export class Container extends Entity {
    IsVirtual: boolean;
    HasChild: boolean;

    // API Specific Fields
    @JsonProperty('@odata.context')
    Context: string;
    @JsonProperty('Child@odata.navigationLink')
    ChildLink: string;
    @JsonProperty('Document@odata.navigationLink')
    Document: string;
}

/**
 * This object provides document specific properties and methods
 */
export class Document extends Entity {
    CheckedOutBy: string;
    Version: string;
}

/**
 * This object contains organization specific properties
 */
 export class Organization {
    ID: string;
    Name: string;
    ParentID: string;
    ParentName: string;
    HasChildren: boolean;

    @JsonProperty('@odata.readLink')
    ReadLink: string;
    @JsonProperty('Child@odata.navigationLink')
    ChildLink: string;
    @JsonProperty('FullODataLink@odata.navigationLink')
    FullODataLink: string;
    @JsonProperty('Parent@odata.navigationLink')
    ParentLink: string;
}