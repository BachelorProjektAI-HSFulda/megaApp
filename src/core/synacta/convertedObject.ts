abstract class Entity {
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
    isFavorite: boolean;
    //lastUsed: string; -> Wie soll Datum oder Zeit modelliert werden?

    //@odata.context: string;
    //@odata.readLink: string;
    //Child@odata.navigationLink: string;
    //Document@odata.navigationLink: string;
    //Parent@odata.navigationLink: string;
    //FullODataLink@odata.navigationLink: string;
    //@odata.editLink: string;
    //@odata.etag: string;
    //@odata.metadataEtag: string;
    //@odata.PicklistLink: string;

    constructor(ID: string, ObjectType: string, Properties: Map<string, string>, PropertyInfos: Map<string, string>,
        ParentID: string, ParentType: string, IsVirtual: boolean, Frozen: boolean, CheckedOutBy: string,
        Version: string, Hash: string) {
        this.ID = ID;
        this.ObjectType = ObjectType;
        this.Properties = Properties;
        this.PropertyInfos = PropertyInfos;
        this.ParentID = ParentID;
        this.IsVirtual = IsVirtual;
        this.Frozen = Frozen;
        this.CheckedOutBy = CheckedOutBy;
        this.Version = Version;
        this.Hash = Hash;
        this.isFavorite = false; //alle Objekte werden bei Erzeugung als Nicht-Favoriten intialisiert
    }
}

class Container extends Entity {
    HasChild: boolean;

    constructor(ID: string, ObjectType: string, Properties: Map<string, string>, PropertyInfos: Map<string, string>,
        ParentID: string, ParentType: string, IsVirtual: boolean, Frozen: boolean, CheckedOutBy: string,
        Version: string, Hash: string, HasChild:boolean) {
        super(ID, ObjectType, Properties, PropertyInfos, ParentID, ParentType, IsVirtual, Frozen, CheckedOutBy, Version, Hash);
        this.isFavorite = false;
        this.HasChild = HasChild;
    }
}


class Dokument extends Entity {
   
    constructor(ID: string, ObjectType: string, Properties: Map<string, string>, PropertyInfos: Map<string, string>,
        ParentID: string, ParentType: string, IsVirtual: boolean, Frozen: boolean, CheckedOutBy: string,
        Version: string, Hash: string, HasChild: boolean) {
        super(ID, ObjectType, Properties, PropertyInfos, ParentID, ParentType, IsVirtual, Frozen, CheckedOutBy, Version, Hash);
        this.isFavorite = false;
    }
}