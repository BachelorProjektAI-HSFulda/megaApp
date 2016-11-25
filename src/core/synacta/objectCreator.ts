function createObject(response)
{
    if (response.hasOwnProperty('Name')) {
        let dokument:SynDocument = createDocument(response);
        return dokument;
    }
    else if (response.hasOwnProperty('Typ')) {
        let container:SynContainer = createContainer(response);
        return container;
    }
}

function createDocument(response)
{
    let dokument:SynDocument = new Dokument(response.ID, response.ObjectType, response.Properties, response.PropertyInfos, response.ParentID, response.ParentType,
        response.IsVirtual, response.Frozen, response.CheckedOutBy, response.Version, response.Hash, response.HasChild);
    return dokument;
}

function createContainer(response)
{
    let container:SynContainer = new Container(response.ID, response.ObjectType, response.Properties, response.PropertyInfos, response.ParentID, response.ParentType,
        response.isVirtual, response.Frozen, response.CheckedOutBy, response.Version, response.Hash, response.HasChild);
    return container;
}

