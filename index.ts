import figlet from "figlet";

const server = Bun.serve({
    port: 3000,
    fetch(req) {
      const body = figlet.textSync("Bun!");
      return new Response(body);  
      return new Response("Bun!");
    },
  });

  await Bun.build({
    entrypoints: ['./index.tsx'],
    outdir: './build',
  });
  
  console.log(`Listening on http://localhost:${server.port} ...`);