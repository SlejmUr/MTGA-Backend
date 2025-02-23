const { TraderController } = require("../../controllers");
const { Ragfair } = require("../../models/Ragfair");
const { Response, logger, stringify, writeFile } = require("../../utilities");

module.exports = async function tradingRoutes(app, _opts) {

    app.post(`/client/trading/api/traderSettings`, async (request, reply) => {
        await TraderController.clientTradingApiGetTradersInfo(reply);
    });

    app.post(`/client/trading/customization/storage`, async (request, reply) => {
        await TraderController.clientTradingCustomizationStorage(await Response.getSessionID(request), reply);
    });

    app.post(`/client/trading/customization/:id/offers`, async (request, reply) => {
        await TraderController.getTraderOutfitOffers(request, reply);
    });

    app.post(`/client/trading/api/getTraderAssort/:traderId`, async (request, reply) => {
        await TraderController.getTraderAssort(request, reply);
    });

    app.post(`/client/trading/api/getUserAssortPrice/trader/:traderId`, async (request, reply) => {
        await TraderController.getUserAssortPrice(request, reply);
    });

    app.post(`/client/ragfair/find`, async (request, reply) => {
        const ragfair = await Ragfair.get("FleaMarket");
        const offers = await ragfair.generateOffersBasedOnRequest(request);
        await writeFile("./fleaoffers.json", stringify(offers));
        return Response.zlibJsonReply(
            reply,
            await Response.applyBody(offers)
        );
    });

    app.post(`/client/ragfair/itemMarketPrice`, async (request, reply) => {
        /**
         * Called when creating an offer on flea, fills values in top right corner
         */
        await logger.info(`/client/ragfair/itemMarketPrice not implemented`);
        return Response.zlibJsonReply(
            reply,
            await Response.applyEmpty("object")
        );
    })

    app.post(`/client/ragfair/offer/findbyid`, async (request, reply) => {
        await logger.info(`/client/ragfair/offer/findbyid not implemented`);
    })

    app.post(`/client/reports/ragfair/send`, async (request, reply) => {
        await logger.info(`/client/reports/ragfair/send not implemented`);

        return Response.zlibJsonReply(
            reply,
            await Response.applyEmpty("null")
        );
    })

};
