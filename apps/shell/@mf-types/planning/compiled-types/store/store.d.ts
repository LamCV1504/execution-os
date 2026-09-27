export declare const store: import("@reduxjs/toolkit").EnhancedStore<{
    executionOsApi: import("@reduxjs/toolkit/query").CombinedState<{}, never, "executionOsApi">;
}, import("@reduxjs/toolkit").UnknownAction, import("@reduxjs/toolkit").Tuple<[import("@reduxjs/toolkit").StoreEnhancer<{
    dispatch: import("@reduxjs/toolkit").ThunkDispatch<{
        executionOsApi: import("@reduxjs/toolkit/query").CombinedState<{}, never, "executionOsApi">;
    }, undefined, import("@reduxjs/toolkit").UnknownAction>;
}>, import("@reduxjs/toolkit").StoreEnhancer]>>;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
