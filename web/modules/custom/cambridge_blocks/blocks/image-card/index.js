import { registerBlockType } from '@wordpress/blocks';
import Edit from './edit';
import Save from './save';
import metadata from './block.json';
import './style.scss';

registerBlockType(metadata.name, {
  ...metadata,
  edit: Edit,
  save: Save,
});
