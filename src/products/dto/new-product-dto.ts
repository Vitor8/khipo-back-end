import { IsNotEmpty, IsString } from 'class-validator';

export class newProductDto {
  @IsNotEmpty()
  @IsString()
  readonly name: string;

  @IsNotEmpty()
  @IsString()
  readonly price: string;

  @IsNotEmpty()
  @IsString()
  readonly brand: string;

  @IsNotEmpty()
  @IsString()
  readonly image: string;
}
