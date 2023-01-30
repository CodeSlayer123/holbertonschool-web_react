import { normalize, schema } from 'normalizr';

const names = new schema.Entity('names');
const credits = new schema.Entity('credits');
const courses = new schema.Entity('courses', {name: names, credit: credits})

export default function coursesNormalizer(data){
    const normal = normalize(data, [courses]);
    return normal
}
