/**
 * @global configuration file
 * Here we can add all our service URLs and returning as string format
 * Author : Sandeep Kumar
 */

export class ApiEndPoint {
    public static get BASE_URL(): string { return 'http://192.168.3.57:3334/'; }
}

export class ChartData{
    public static get DATA_URL(): string { return 'getChartData';}
}

export class TableData{
  public static get DATA_URL(): string { return 'getTableData';}
}

export class TagsData{
  public static get DATA_URL(): string { return 'getTagsData';}
}
