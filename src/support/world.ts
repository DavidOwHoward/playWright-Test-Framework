import { World, IWorldOptions, setWorldConstructor } from '@cucumber/cucumber';
import { Browser } from '@playwright/test';
import { ActorSession } from '../../BaseFramework/Actors/ActorSession';
import { ActorsManager } from '../../BaseFramework/Actors/ActorsManager';
import { LoginUser } from '../../config/user';


export class CustomWorld extends World {
  browser!: Browser;
  actors!: ActorsManager;
  currentActor?: ActorSession;
  

  // Generic test data
  testData: Record<string, any> = {};

  constructor(options: IWorldOptions) {
    super(options);
  }

  async as(user: LoginUser): Promise<ActorSession> {
    return this.actors.as(user);
  }

  async useActor(user: LoginUser): Promise<ActorSession> {
    const actor = await this.actors.as(user);
    this.currentActor = actor;
    return actor;
  }

  get actor(): ActorSession {
    if (!this.currentActor) {
      throw new Error('No current actor is set for this scenario. Call useActor(user) first.');
    }
    return this.currentActor;
  }
}

setWorldConstructor(CustomWorld);
