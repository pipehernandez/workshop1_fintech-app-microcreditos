export interface FinancialRecord {
  id: string; // Identificador único del registro
  amount: number; // Monto del registro
  description?: string; // Descripción opcional del registro
  category: string; // Categoría del gasto o ingreso
}
