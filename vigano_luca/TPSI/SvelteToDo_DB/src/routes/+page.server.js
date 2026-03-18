
// import Database from "better-sqlite3";
// const db = new Database("USER.db", {verbose: console.log});
// export function load({params}){
//     console.log("ESECUZIONE FUNZIONE LOAD:", Date.now());

//     const query1 = db.prepare("SELECT * FROM dafare");
//     const res1 = query1.all();

//     return{
//         Roba:res1,
//     };
// }

// export const actions = {
//     default: async ({cookies, request}) => {
//         const data = await request.from.Data();
//         console.log("I VALORI DEL FORM SONO:", data);

//         utenti.push(
//             {
//                 roba: data.get("Roba"),

//             }
//         )
//     }
// }