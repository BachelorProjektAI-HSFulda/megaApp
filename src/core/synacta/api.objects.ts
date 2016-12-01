<<<<<<< HEAD
/**
 * This object provides all functionality of the Synacta API
 * All other objects are a subset of this Interface.
 * TODO - find out which fields are optional
 */
export interface IGenericBaseEntity {
    Properties?: any;
    PropertyInfos?: any;
=======
import { JsonProperty } from 'json-typescript-mapper';

/**
 * This object provides all functionality of the Synacta API
 * All other objects are a subset of this Interface.
 * TODO: find out how to handle parameters which can be empty
 * (they are marked with "TODO")
 */
export class GenericBaseEntity {
    Properties: any = void(0);
    PropertyInfos: any = void(0);
>>>>>>> origin/epic_#42_branch
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
<<<<<<< HEAD
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
=======

    // API Specific Fields
    @JsonProperty('@odata.readLink')
    ReadLink: string; //link of this entity in Synacta
    @JsonProperty('@odata.nextLink')
    NextLink: string; //TODO
    @JsonProperty('Child@odata.navigationLink')
    ChildLink: string; //links to this entity's children
    @JsonProperty('FullODataLink@odata.navigationLink')
    FullODataLink: string; //links to complete content of this entity
    @JsonProperty('StandardODataLink@odata.navigationLink')
    StandardODataLink: string; //TODO
    @JsonProperty('NoneODataLink@odata.navigationLink')
    NoneODataLink: string; //TODO
    @JsonProperty('Parent@odata.navigationLink')
    ParentLink: string; //links to parent of this entity
    @JsonProperty('@odata.context')
    Context: string; //links to type folder of this entity
    @JsonProperty('@odata.count')
    Count: number; //what is this for?
    @JsonProperty('Document@odata.navigationLink')
    Document: string; //links to documents within this entity
    @JsonProperty('@odata.editLink')
    EditLink: string; //TODO
    @JsonProperty('@odata.etag')
    ETag: string; //TODO
    @JsonProperty('@odata.metadataEtag')
    MetadataETag: string; //TODO
    @JsonProperty('@odata.PicklistLink')
    PicklistLink: string; //TODO
>>>>>>> origin/epic_#42_branch
}

/**
 * This object is either a container or a document
 */
<<<<<<< HEAD
export interface IEntity {
    Properties: any;
    PropertyInfos?: any;
=======
export class Entity {
    Properties: any;
    PropertyInfos: any;
>>>>>>> origin/epic_#42_branch
    ID: string;
    ObjectType: string;
    ParentID: string;
    ParentType: string;
    Frozen: boolean;
    Hash: string;
<<<<<<< HEAD
    // @odata.readLink: string;
    // FullODataLink@odata.navigationLink: string;
=======

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
>>>>>>> origin/epic_#42_branch
}

/**
 * This object is a transmission frame
 * with message and navigation metadata
 */
<<<<<<< HEAD
export interface IBaseEntityFrame<T> {
    // @odata.context
    // @odata.count
    // Document@odata.navigationLink
    // odata.editLink
    value: T[];
=======
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
>>>>>>> origin/epic_#42_branch
}

/**
 * This object provides container specific properties and functions
 */
<<<<<<< HEAD
export interface IContainer extends IEntity {
    IsVirtual: boolean;
    HasChild: boolean;
    // @odata.context?: string;
    // Child@odata.navigationLink: string;
    // Document@odata.navigationLink: string;
=======
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
>>>>>>> origin/epic_#42_branch
}

/**
 * This object provides document specific properties and methods
 */
<<<<<<< HEAD
export interface IDocument extends IEntity {
=======
export class Document extends Entity {
>>>>>>> origin/epic_#42_branch
    CheckedOutBy: string;
    Version: string;
}

/**
 * This object contains organization specific properties
 */
<<<<<<< HEAD
 export interface IOrganization {
=======
 export class Organization {
>>>>>>> origin/epic_#42_branch
    ID: string;
    Name: string;
    ParentID: string;
    ParentName: string;
    HasChildren: boolean;
<<<<<<< HEAD
    // @odata.readLink: string;
    // Child@odata.navigationLink: string;
    // FullODataLink@odata.navigationLink: string;
    // Parent@odata.navigationLink: string;
=======

    @JsonProperty('@odata.readLink')
    ReadLink: string;
    @JsonProperty('Child@odata.navigationLink')
    ChildLink: string;
    @JsonProperty('FullODataLink@odata.navigationLink')
    FullODataLink: string;
    @JsonProperty('Parent@odata.navigationLink')
    ParentLink: string;
>>>>>>> origin/epic_#42_branch
}