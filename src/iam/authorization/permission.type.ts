import { type } from 'os';
import { CoffeesPersmission } from 'src/coffees/coffees.permission';

export const Permission = {
  ...CoffeesPersmission,
};

export type PermissionType = CoffeesPersmission;
