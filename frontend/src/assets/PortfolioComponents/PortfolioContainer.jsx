import React from "react";
import { TOTAL_SCREENS } from "../../utilities/utils";

export default function PortfolioContainer() {
    const mapAllScreens = () => {
        return TOTAL_SCREENS.map((screen) =>
            screen.component ? (
                <screen.component
                    screenName={screen.screen_name}
                    key={screen.screen_name}
                    id={screen.screen_name}
                />
            ) : (
                <div key={screen.screen_name} id={screen.screen_name} />
            )
        );
    };

    return <div className="portfolio-container">{mapAllScreens()}</div>;
}
