import { MessageService } from './message.service';

describe('Message service', () => {

  it('should have no message to start', () => {
    const service = new MessageService();
    expect(service.messages.length).toBe(0);
  });

  it('should add a message when add is called', () => {
    const service = new MessageService();
    service.add('test');
    expect(service.messages.length).toBe(1);
  });

  it('should remove all message when clear is called', () => {
    const service = new MessageService();
    service.add('test message 1');
    service.add('test message 2');
    service.clear();
    expect(service.messages.length).toBe(0);
  });
});

