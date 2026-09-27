import type { TaskStatus } from '@execution-os/contracts';

export type EventMap = {
  TASK_STATUS_CHANGED: {
    taskId: string;
    status: TaskStatus;
  };

  WORKING_UNIT_STARTED: {
    workingUnitId: string;
    taskId: string;
  };

  WORKING_UNIT_COMPLETED: {
    workingUnitId: string;
    taskId: string;
  };

  FOCUS_SESSION_STARTED: {
    focusSessionId: string;
    workingUnitId: string;
  };

  FOCUS_SESSION_COMPLETED: {
    focusSessionId: string;
    workingUnitId: string;
    focusedDurationSeconds: number;
  };
};

export type EventType = keyof EventMap;

export type Event<TType extends EventType = EventType> = {
  type: TType;
  payload: EventMap[TType];
  occurredAt: string;
};

type Handler<TType extends EventType> = (event: Event<TType>) => void;

export class EventBus {
  private handlers = new Map<EventType, Set<Handler<EventType>>>();

  publish<TType extends EventType>(
    type: TType,
    payload: EventMap[TType],
  ): void {
    const event: Event<TType> = {
      type,
      payload,
      occurredAt: new Date().toISOString(),
    };

    this.handlers.get(type)?.forEach((handler) => {
      handler(event);
    });
  }

  subscribe<TType extends EventType>(
    type: TType,
    handler: Handler<TType>,
  ): () => void {
    const handlers = this.handlers.get(type) ?? new Set();

    handlers.add(handler as Handler<EventType>);
    this.handlers.set(type, handlers);

    return () => {
      handlers.delete(handler as Handler<EventType>);

      if (handlers.size === 0) {
        this.handlers.delete(type);
      }
    };
  }
}

export const eventBus = new EventBus();
