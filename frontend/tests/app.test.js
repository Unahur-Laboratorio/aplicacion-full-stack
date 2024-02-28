describe('Frontend Interaction Test', () => {
    beforeEach(() => {
      global.fetch = jest.fn(() =>
        Promise.resolve({
          json: () => Promise.resolve({ message: 'Mensaje mockeado desde la API' }),
        })
      );
    });
  
    afterEach(() => {
      jest.resetAllMocks();
    });
  
    it('should update the message div with API response when button is clicked', async () => {
      document.body.innerHTML = `
        <button id="fetchMessage">Obtener Mensaje</button>
        <div id="message"></div>
      `;
  
      require('../app');
  
      document.getElementById('fetchMessage').click();
  
      await new Promise(process.nextTick);
  
      const messageDiv = document.getElementById('message');
      expect(messageDiv.innerText).toBe('Mensaje mockeado desde la API');
    });
  });
  