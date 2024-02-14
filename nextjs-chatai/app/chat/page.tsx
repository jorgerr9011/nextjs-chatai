'use client';

import { useChat } from 'ai/react';

export default function Page() {

    const { messages, input, handleInputChange, handleSubmit } = useChat();

    return (
        <div className="mx-auto w-full max-w-md py-24 flex flex-col stretch">
            {messages.map(m => (
                <div key={m.id}>
                    {m.role === 'user' ? 'User: ' : 'AI: '}
                    {m.content}
                </div>
            ))}

            <form onSubmit={handleSubmit}>
                <label>
                    Say something...
                    <input
                        className="fixed w-full max-w-md bottom-0 border border-black-300 text-black rounded mb-8 shadow-xl p-2"
                        value={input}
                        onChange={handleInputChange}
                    />
                </label>
                <button type="submit">Send</button>
            </form>
        </div>
    );
}