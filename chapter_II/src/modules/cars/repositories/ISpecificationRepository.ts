import { Specification } from "../model/specification";


interface ICreateSpecificationDTO {
    name: string;
    description: string;
}

interface ISpecificationRepository {
    create({ name, description }: ICreateSpecificationDTO);
    findByName(name: string): Specification;
}

export { ISpecificationRepository, ICreateSpecificationDTO }