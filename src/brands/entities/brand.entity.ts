/**
 * Entities define how the data structure should look for this table.
 * Entities always are connected to one table in the database.
 *
 * Normally, the name we give to this class will be the name of the table.
 */
export class Brand {
  id: string;
  name: string;

  createdAt: number;
  updatedAt?: number;
}
