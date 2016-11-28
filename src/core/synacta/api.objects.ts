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
}

/**
 * This object is either a container or a document
 */
export interface IEntity {
    Properties: Map<String, String>;
    PropertyInfos?: Map<String, String>;
    ID: string;
    ObjectType: string;
    ParentID: string;
    ParentType: string;
    Frozen: boolean;
    Hash: string;
}

/**
 * This object is a transmission frame
 * with message and navigation metadata
 */
export interface IBaseEntityFrame<T> {
    value: T[];
}

/**
 * This object provides container specific properties and functions
 */
export interface IContainer extends IEntity {
    IsVirtual: boolean;
    HasChild: boolean;
    Children: Set<IEntity>;
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
}