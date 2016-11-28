/**
 * This object provides all functionality of the Synacta API
 * All other objects are a subset of this Interface.
 * TODO - find out which fields are optional
 */
export interface IGenericBaseEntity {
    Properties?: any;
    PropertyInfos?: any;
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
    // @odata.readLink
    // @odata.nextLink?
    // Child@odata.navigationLink
    // FullODataLink@odata.navigationLink
    // StandardODataLink@odata.navigationLink
    // NoneODataLink@odata.navigationLink
    // Parent@odata.navigationLink
    // @odata.context
    // @odata.count
    // Document@odata.navigationLink
    // @odata.editLink
    // @odata.etag
    // @odata.metadataEtag
    // @odata.PicklistLink
}

/**
 * This object is either a container or a document
 */
export interface IEntity {
    Properties: any;
    PropertyInfos?: any;
    ID: string;
    ObjectType: string;
    ParentID: string;
    ParentType: string;
    Frozen: boolean;
    Hash: string;
    // @odata.readLink: string;
    // FullODataLink@odata.navigationLink: string;
}

/**
 * This object is a transmission frame
 * with message and navigation metadata
 */
export interface IBaseEntityFrame<T> {
    // @odata.context
    // @odata.count
    // Document@odata.navigationLink
    // odata.editLink
    value: T[];
}

/**
 * This object provides container specific properties and functions
 */
export interface IContainer extends IEntity {
    IsVirtual: boolean;
    HasChild: boolean;
    // @odata.context?: string;
    // Child@odata.navigationLink: string;
    // Document@odata.navigationLink: string;
}

/**
 * This object provides document specific properties and methods
 */
export interface IDocument extends IEntity {
    CheckedOutBy: string;
    Version: string;
}

/**
 * This object contains organization specific properties
 */
 export interface IOrganization {
    ID: string;
    Name: string;
    ParentID: string;
    ParentName: string;
    HasChildren: boolean;
    // @odata.readLink: string;
    // Child@odata.navigationLink: string;
    // FullODataLink@odata.navigationLink: string;
    // Parent@odata.navigationLink: string;
}