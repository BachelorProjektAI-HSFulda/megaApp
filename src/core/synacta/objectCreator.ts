public createObject(response)
{
    if (response.hasOwnProperty('Name')) {
        return dokument;
    }
    else if (response.hasOwnProperty('Typ')) {
        return container;
    }
}

public Dokument createDocument(response)
{
}

public Container createContainer(response)
{
        response.isVirtual, response.Frozen, response.CheckedOutBy, response.Version, response.Hash, response.HasChild);
}

