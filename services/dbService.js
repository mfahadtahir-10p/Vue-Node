import fs from 'fs/promises';

export function writeDB(fileName, data){
    console.log(fileName)
    fs.writeFile(`./Data/${fileName}.json`, JSON.stringify(data), 'utf8');
}

// export function readDB(fileName){
//     fs.readFile(`../Data/${fileName}`, 'utf8', (err, data) => {
//         if (err) {
//             console.error(`Error reading file: ${err}`);
//             return;
//         }
    
//         // Parse the JSON data
//         const jsonData = JSON.parse(data);
    
//         // Access the data
//         // console.log(jsonData);
//         return jsonData;
//     });
//     // rewrite the previous whole function in async await
//     // try {


// }

export async function readDB(fileName) {
    try {
        // Read the JSON file
        // const data = await readFileAsync(`../Data/${fileName}`, 'utf8');
        const data = await fs.readFile(`./Data/${fileName}.json`, 'utf8');


        // Parse the JSON data
        const jsonData = JSON.parse(data);

        // Access the data
        return jsonData;
    } catch (err) {
        console.error(`Error reading file: ${err}`);
        throw err; // Rethrow the error for handling in the calling code
    }
};

