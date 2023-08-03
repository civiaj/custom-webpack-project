import { render } from "@testing-library/react";
import { RootState, StoreProvider } from "app/providers/StoreProvider";
import { ReactNode } from "react";
import { I18nextProvider } from "react-i18next";
import { MemoryRouter } from "react-router-dom";
import i18nForTests from "shared/config/i18n/i18nForTests";

export interface renderOnTestWrapperOptions {
    route?: string;
    preloadedState?: DeepPartial<RootState>;
}

export function RenderOnTestWrapper(
    component: ReactNode,
    options: renderOnTestWrapperOptions = {}
) {
    const { route = "/", preloadedState } = options;
    return render(
        <StoreProvider preloadedState={preloadedState as RootState}>
            <MemoryRouter initialEntries={[route]}>
                <I18nextProvider i18n={i18nForTests}>
                    {component}
                </I18nextProvider>
            </MemoryRouter>
        </StoreProvider>
    );
}
