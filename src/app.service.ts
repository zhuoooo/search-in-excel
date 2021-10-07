import { Injectable } from '@nestjs/common';
import * as xlsx from 'xlsx'
import * as path from 'path'

@Injectable()
export class AppService {

  getExcel(): Record<string, any>[] {
    let workbook = xlsx.readFile(path.resolve(process.cwd(), './excel/data.xlsx'), {
      cellHTML: false
    })
    let sheetNames = workbook.SheetNames; //获取表名 

    //  可多sheet  循环
    let sheet = workbook.Sheets[sheetNames[0]]; //通过表名得到表对象

    let data = xlsx.utils.sheet_to_json(sheet); //通过工具将表对象的数据读出来并转成json
    return data
  }

  search(keyword = '') {
    let allData = this.getExcel()

    return allData.filter(item => {
      let curRow = [item.__EMPTY_1, item.__EMPTY_2].filter(item => !!item)

      return curRow?.some(v => {
        return v.toString()?.toLocaleUpperCase().includes(keyword.toLocaleUpperCase())
      })
    })
  }
}
