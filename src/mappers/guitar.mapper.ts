import type { GuitarDTO } from '@/dtos/guitar.dto';
import type { GuitarModel } from '@/types/guitar';

// In a larger app, this might map DTO to a Domain Entity
// For now, it passes through the DTO to the frontend model
export const mapGuitarDtoToModel = (dto: GuitarDTO): GuitarModel => {
    return {
        id: dto.id,
        name: dto.name,
        // We ensure image maps correctly to our public assets or placeholders
        image: `/img/guitar_default.png`, // using the generated image for all for demonstration
        description: dto.description,
        price: dto.price,
        originalImageName: dto.image, // keep it in case needed
    };
};
