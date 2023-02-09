import { normalize, schema } from 'normalizr';

const names = new schema.Entity('names');
const credits = new schema.Entity('credits');
const courses = new schema.Entity('courses', {name: names, credit: credits})

export function courseNormalizer(data){
    const normal = normalize(data, [courses]);
    return normal
}

//export const courseNormalizer = (data) => normalize(data, [course]);
