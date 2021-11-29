import { EventEmitter } from '../../stencil-public-runtime';
export declare class ArcGISPortal {
  portal: any;
  url: string;
  loaded: EventEmitter<boolean>;
  componentWillLoad(): Promise<void>;
}
