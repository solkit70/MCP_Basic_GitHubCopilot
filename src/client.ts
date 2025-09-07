import { Client, StdioClientTransport } from '@modelcontextprotocol/typescript-sdk';

async function runClient() {
    // 클라이언트 인스턴스 생성
    const client = new Client();

    // stdio 전송 설정
    const transport = new StdioClientTransport(
        process.stdin,
        process.stdout
    );

    // 서버에 연결
    await client.connect(transport);

    try {
        // 덧셈 도구 호출
        const result = await client.invoke('add', {
            a: 5,
            b: 3
        });

        console.error('계산 결과:', result.result);
    } catch (error) {
        console.error('도구 호출 중 오류 발생:', error);
    } finally {
        // 연결 종료
        await client.disconnect();
    }
}

runClient().catch((error) => {
    console.error('클라이언트 실행 중 오류 발생:', error);
    process.exit(1);
});
