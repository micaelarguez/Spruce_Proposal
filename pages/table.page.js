import BasePage from "./base.page";

class TablePage extends BasePage {
    constructor(title){
       super();
        this.title = title;
    }

    //selector
    get columnSelector(){}
    get rowSelector(){}
    get cellSelector(){}

    //To get all the columns
    async getColumns() {
        const columns = await $$(this.columnSelector);
        const columnNames = await columns.map(e => e.getText());
        return columnNames;
    }
    //to get a column index
    async getColumn(colName){
        const columns = await this.getColumns();
        return columns.findIndex(colName);
    }
    
    //whit de index column get de row 
    async getRow(colName, value){
        const rows = await $$(this.rowSelector);
        const index = this.getColumn(colName);
        for (let i = 0; i < rows.length; i++) {
            const cellValue = await this.getCellValue(rows[i], index)
            if(cellValue.includes(value)){
                return rows[i];
            }
        }
        return undefined;
    }

    async getCellValue(row, index){
        const cells = await row.$$(this.cellSelector);
        const cellValue = await cells[index].getText();
    }

    async search(column, value){
        let rowValues ={};
        const row = await this.getRow(column, value);
        const columns = await this.getColumns();
        for (let i = 0; i < columns.length; i++) {
            rowValues[columns[i]] = await this.getCellValue(row, i);  
        }
        return rowValues;
    }
}
export default TablePage;

