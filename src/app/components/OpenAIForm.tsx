"use client";
import React, { useState } from 'react';
import { Configuration, OpenAIApi } from 'openai';

const OpenAIForm = () => {
  const [apiKey, setApiKey] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [inputText, setInputText] = useState('');
  const [result, setResult] = useState('');

  const handleApiKeyChange = (event) => {
    setApiKey(event.target.value);
    setError('');
    setSuccess('');
  };

  const handleSaveApiKey = () => {
    if (!apiKey.trim()) {
      setError('Please enter a valid API key.');
      return;
    }

    // Save the API key to local storage
    localStorage.setItem('openAIApiKey', apiKey);

    // Reset the error and set the success message
    setError('');
    setSuccess('API key saved successfully!');

    // You can also send the API key to the server for storage
    // ...
  };

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleSubmit = async () => {
    try {
      const configuration = new Configuration({
        apiKey: apiKey,
      });
      const openai = new OpenAIApi(configuration);
  
      const response = await openai.createCompletion({
        model: 'text-davinci-003',
        prompt: inputText,
        max_tokens: 2048,
        temperature: 0.5,
      });
  
      setResult(response.data.choices[0].text);
    } catch (error) {
      console.error('Error:', error);
    }
  };
  return (
    <div className="ml-auto flex flex-col gap-4 items-center">
      <div className="flex gap-4 items-center">
        <label htmlFor="apiKey" className="text-fuchsia-400 font-bold">
          API Key:
        </label>
        <input
          type="text"
          id="apiKey"
          value={apiKey}
          onChange={handleApiKeyChange}
          placeholder="Enter your OpenAI API Key"
          className="border border-gray-300 rounded-md p-2 text-red-300"
        />
        <button
          onClick={handleSaveApiKey}
          className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
        >
          Save API Key
        </button>
        {error && <p className="text-red-500">{error}</p>}
        {success && <p className="text-green-500">{success}</p>}
      </div>
      <div className="flex flex-col gap-2">
        <textarea
          value={inputText}
          onChange={handleInputChange}
          placeholder="Enter your text..."
          rows={4}
          className="w-full border border-gray-300 rounded-md p-2 text-red-300"
        />
        <button
          onClick={handleSubmit}
          disabled={!apiKey}
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 disabled:bg-gray-400 disabled:cursor-not-allowed"
        >
          Submit
        </button>
        {result && <div className="mt-4 bg-gray-100 p-4 rounded-md">{result}</div>}
      </div>
    </div>
  );
};

export default OpenAIForm;