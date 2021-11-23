import { CategoriesRepository } from "../../repositories/implementations/CategoriesRepository";

class ListCategoriesUseCase {
    constructor(private categoriesRepository: CategoriesRepository) {}

    execute() {
        const categories = this.categoriesRepository.list();
        return categories;
    }
}

export { ListCategoriesUseCase }