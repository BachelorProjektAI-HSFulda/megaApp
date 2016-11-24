public createObject(response)
{
    if (response.hasOwnProperty('Name')) {
        dokument:Dokument = createDocument(response);
        return dokument;
    }
    else if (response.hasOwnProperty('Typ')) {
        container:Container = createContainer(response);
        return container;
    }
}

public Dokument createDocument(response)
{
    dokument:Dokument = new Dokument(response.ID, response.ObjectType, response.Properties, response.PropertyInfos, response.ParentID, response.ParentType,
        response.IsVirtual, response.Frozen, response.CheckedOutBy, response.Version, response.Hash, response.HasChild);
    return dokument;
}

public Container createContainer(response)
{
    container:Container = new Container(response.ID, response.ObjectType, response.Properties, response.PropertyInfos, response.ParentID, response.ParentType,
        response.isVirtual, response.Frozen, response.CheckedOutBy, response.Version, response.Hash, response.HasChild);
    return container;
}

