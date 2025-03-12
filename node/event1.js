async function task() {
    console.log("Task started");
    await new Promise(resolve => setTimeout(resolve, 2000)); 
    console.log("Task completed");
}

async function main() {
    console.log("Main started");
    await task();
    console.log("Main finished");
}

main();
