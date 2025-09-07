import { Server, Implementation, StdioServerTransport, ServerCapabilities, Tool } from '@modelcontextprotocol/typescript-sdk';

// 간단한 덧셈을 수행하는 도구 정의
const addTool: Tool = {
    name: 'add',
    description: '두 숫자를 더합니다.',
    inputSchema: {
        type: 'object',
        properties: {
            a: {
                type: 'number',
                description: '첫 번째 숫자'
            },
            b: {
                type: 'number',
                description: '두 번째 숫자'
            }
        },
        required: ['a', 'b']
    },
    handler: async (params) => {
        const { a, b } = params;
        return { result: a + b };
    }
};

// MCP 서버 구현
async function runServer() {
    // 서버 인스턴스 생성
    const server = new Server(
        new Implementation(
            'basic-calculator', // 서버 이름
            '1.0.0' // 버전
        ),
        {
            capabilities: new ServerCapabilities({
                tools: {
                    listChanged: true
                }
            })
        }
    );

    // 도구 등록
    server.addTool(addTool);

    // stdio 전송 설정
    const transport = new StdioServerTransport(
        process.stdin,
        process.stdout
    );

    // 서버 시작
    await server.connect(transport);

    console.error('MCP 서버가 시작되었습니다.');
}

runServer().catch((error) => {
    console.error('서버 실행 중 오류 발생:', error);
    process.exit(1);
});
