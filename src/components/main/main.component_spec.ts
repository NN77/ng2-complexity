import {TestComponentBuilder, beforeEachProviders, describe, expect, inject, it} from 'angular2/testing';
import {Component, View} from 'angular2/core';
import {MainComponent} from "./main.component";

export function main() {
  describe('MainComponent', () => {
    // provide our implementations or mocks to the dependency injector
    beforeEachProviders(() => [
      MainComponent
    ]);

    it('should have a coupon code: CSGOSKINS', inject([MainComponent], (MainComponent) => {
      expect(MainComponent.code).toEqual('CSGOSKINS');
    }));
  })
}