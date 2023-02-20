// import { DataModelClient } from "linql.client";
import { CoreModel } from "linql.core";
class LinqlNodeExample {
    async Run() {
        //This doesn't work because it says it can't find linql.core
        //Uncaught Error Error [ERR_MODULE_NOT_FOUND]: Cannot find package 'linql.core' imported from C:\testModuleImport\Typescript\dist\linql.client\fesm2015\linql.client.mjs
        // const test = new DataModelClient();
        // console.log(test);
        //This does work, so obviously it can find linql.core
        const test2 = new CoreModel();
        console.log(test2);
    }
}
export async function Main() {
    const example = new LinqlNodeExample();
    await example.Run();
}
//# sourceMappingURL=app.js.map