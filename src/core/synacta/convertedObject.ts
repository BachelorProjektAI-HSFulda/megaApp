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

    entityContextLink: string; //@odata.context: links to type folder of this entity
    //@odata.count: int;
    synactaLink: string;   //@odata.readLink: link of this entity in Synacta
    childrenLink: string; //Child@odata.navigationLink: links to this entity's children
    documentsLink: string; //Document@odata.navigationLink: links to documents within this entity
    parentsLink: string; //Parent@odata.navigationLink: links to parent of this entity;
    fullDataLink: string;//FullODataLink@odata.navigationLink: links to complete content of this entity;
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

    setEntityContextLink(entityContextLink: string);
    getEntityContextLink();
    setSynactaLink(synactaLink: string);
    getSynactaLink();
    setChildrenLink(childrenLink: string);
    getChildrenLink();
    setDocumentsLink(documentsLink: string);
    getDocumentsLink();
    setParentsLink(parentsLink: string);
    getParentsLink();
    setFullDataLink(fullDataLink: string);
    getFullDataLink();

}

export interface SynContainer extends Entity {
    HasChild: boolean;
}


export interface SynDocument extends Entity {

}

