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
    ID: string = void(0);
    ObjectType: string = void(0);
    ParentID: string = void(0);
    ParentType: string = void(0);
    IsVirtual: boolean = void(0);
    Frozen: boolean = void(0);
    HasChild: boolean = void(0);
    CheckedOutBy: string = void(0);
    Version: string = void(0);
    Hash: string = void(0);

    // API Specific Fields
    @JsonProperty('@odata.readLink')
    ReadLink: string = void(0); //link of this entity in Synacta
    @JsonProperty('@odata.nextLink')
    NextLink: string = void(0); //TODO
    @JsonProperty('Child@odata.navigationLink')
    ChildLink: string = void(0); //links to this entity's children
    @JsonProperty('FullODataLink@odata.navigationLink')
    FullODataLink: string = void(0); //links to complete content of this entity
    @JsonProperty('StandardODataLink@odata.navigationLink')
    StandardODataLink: string = void(0); //TODO
    @JsonProperty('NoneODataLink@odata.navigationLink')
    NoneODataLink: string = void(0); //TODO
    @JsonProperty('Parent@odata.navigationLink')
    ParentLink: string = void(0); //links to parent of this entity
    @JsonProperty('@odata.context')
    Context: string = void(0); //links to type folder of this entity
    @JsonProperty('@odata.count')
    Count: number = void(0); //shows the amount of elements within this entity
    @JsonProperty('Document@odata.navigationLink')
    Document: string = void(0); //links to documents within this entity
    @JsonProperty('@odata.editLink')
    EditLink: string = void(0); //TODO
    @JsonProperty('@odata.etag')
    ETag: string = void(0); //TODO
    @JsonProperty('@odata.metadataEtag')
    MetadataETag: string = void(0); //TODO
    @JsonProperty('@odata.PicklistLink')
    PicklistLink: string = void(0); //TODO
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

    constructor() {
        this.Properties = void(0);
        this.PropertyInfos = void(0);
        this.ID = void(0);
        this.ObjectType = void(0);
        this.ParentID = void(0);
		this.ParentType = void(0);
        this.Frozen = void(0);
        this.Hash = void(0);
        this.ReadLink = void(0);
        this.FullODataLink = void(0);
    }
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

    constructor() {
        this.value = void(0);
        this.Context = void(0);
        this.Count = void(0);
        this.Document = void(0);
        this.EditLink = void(0);
    }
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

    constructor() {
        super();
        this.IsVirtual = void(0);
        this.HasChild = void(0);
        this.Context = void(0);
        this.ChildLink = void(0);
        this.Document = void(0);
    }
}

/**
 * This object provides document specific properties and methods
 */
export class Document extends Entity {
    CheckedOutBy: string;
    Version: string;
    
    constructor() {
        super();
        this.CheckedOutBy = void(0);
        this.Version = void(0);
    }
}

/**
 * This object contains organization specific properties
 */
 export class Organization {
    ID: string = void(0);
    Name: string = void(0);
    ParentID: string = void(0);
    ParentName: string = void(0);
    HasChildren: boolean = void(0);

    @JsonProperty('@odata.readLink')
    ReadLink: string = void(0);
    @JsonProperty('Child@odata.navigationLink')
    ChildLink: string = void(0);
    @JsonProperty('FullODataLink@odata.navigationLink')
    FullODataLink: string = void(0);
    @JsonProperty('Parent@odata.navigationLink')
    ParentLink: string = void(0);
}
