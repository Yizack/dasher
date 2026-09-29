export interface Dasher {
  uuid: string;
  type: "audio" | "video";
  name: string;
  url: string;
}

export interface DasherQueue {
  image?: string;
  transaction: Pick<Twitch.ext.BitsTransaction, "displayName" | "transactionReceipt">;
  data: Dasher;
}

export interface DasherQueued {
  image?: string;
  transaction: Pick<Twitch.ext.BitsTransaction, "displayName"> & {
    product: Pick<Twitch.ext.BitsTransaction["product"], "cost">;
  };
  data: Dasher;
}

export interface DasherQueuedEvent {
  type: "queued";
  data: DasherQueued;
}

export interface DasherQueueItem extends DasherQueued {
  queueId: number;
}
