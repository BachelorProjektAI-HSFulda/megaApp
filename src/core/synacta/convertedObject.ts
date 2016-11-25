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

    //@odata.context: string;
    synacta_link: string;   //Link der Entity in Synacta
    //Child@odata.navigationLink: string; -> Link auf Kinder der Entity
    //Document@odata.navigationLink: string; -> Link auf Dokumente innerhalb der Entity 
    //Parent@odata.navigationLink: string;
    //FullODataLink@odata.navigationLink: string;
    //@odata.editLink: string;
    //@odata.etag: string;
    //@odata.metadataEtag: string;
    //@odata.PicklistLink: string;

    //setID(ID: string);
    //getID();
    //setObjectType(ObjectType: string);
    //getObjectType();
    //setProperties(Properties: Map<string, string>);
    //getProperties();
    //setPropertyInfos(PropertyInfos: Map<string, string>);
    //getPropertyInfos();
    //setParentID(ParentID: string);
    //getParentID();


}

export interface SynContainer extends Entity {
    HasChild: boolean;
}


export interface SynDocument extends Entity {

}

