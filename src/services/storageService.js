
export default {
    query,
    get,
    post,
    put,
    remove,

    _save
    
}

async function query(entityType) {
    let entities = await JSON.parse(localStorage.getItem(entityType)) || []
    return entities
}


async function post(entityType, newEntity) {
    let entities = await query(entityType)
    entities.push(newEntity);
    _save(entityType, entities)
    return newEntity;
}


async function get(entityType, entityName) {
let entities=await query(entityType)
       let item= entities.find(entity => entity.name === entityName)
       return item
}



function put(entityType, updatedEntity) {
    return query(entityType)
        .then(entities => {
            const idx = entities.findIndex(entity => entity.name === updatedEntity.name);
            entities.splice(idx, 1, updatedEntity)
            _save(entityType, entities)
            return updatedEntity;
        })
}

async function remove(entityType, entityName) {
    console.log(entityType,entityName);
    let entities = await query(entityType)
    const idx = entities.findIndex(entity => entity.name === entityName);
    console.log(idx);
    entities.splice(idx, 1)
    _save(entityType, entities)
}

function _save(entityType, entities) {
    localStorage.setItem(entityType, JSON.stringify(entities))
}



