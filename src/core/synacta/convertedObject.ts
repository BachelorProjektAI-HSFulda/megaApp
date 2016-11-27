export interface Entity {
    ID: string;
    ObjectType: string;
    Properties: Map<string,string>;
    PropertyInfos: Map<string,string>;
    ParentID: string;
    ParentType: string;
    IsVirtual: boolean;
    Frozen: boolean;
    CheckedOutBy: string;
    Version: string;
    Hash: string;

    entity_context_link: string; //@odata.context: links to type folder of this entity
    //@odata.count: int;
    synacta_link: string;   //@odata.readLink: link of this entity in Synacta
    children_link: string; //Child@odata.navigationLink: links to this entity's children
    documents_link: string; //Document@odata.navigationLink: links to documents within this entity
    parents_link: string; //Parent@odata.navigationLink: links to parent of this entity;
    full_data_link: string;//FullODataLink@odata.navigationLink: links to complete content of this entity;
    //@odata.editLink: string;
    //@odata.etag: string;
    //@odata.metadataEtag: string;
    //@odata.PicklistLink: string;

    setID(ID: string);
    getID();
    setObjectType(ObjectType: string);
    getObjectType();
    setProperties(Properties: Map<string, string>);
    getProperties();
    setPropertyInfos(PropertyInfos: Map<string, string>);
    getPropertyInfos();
    setParentID(ParentID: string);
    getParentID();
    setIsVirtual(IsVirtual: string);
    getIsVirtual();
    setFrozen(Frozen: boolean);
    getFrozen();
    setCheckedOutBy(CheckedOutBy: string);
    getCheckedOutBy();
    setVersion(Version: string);
    getVersion();
    setHash(Hash: string);
    getHash();


}

export interface SynContainer extends Entity {
    HasChild: boolean;
}


export interface SynDocument extends Entity {

}

