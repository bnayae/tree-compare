import Tree from 'rc-Tree';
import { ReactText } from 'react';
import { IWithClassName } from '../../../interfaces';

// interface DataNode {
//   checkable?: boolean;
//   children?: DataNode[];
//   disabled?: boolean;
//   disableCheckbox?: boolean;
//   icon?: IconType;
//   isLeaf?: boolean;
//   key: string | number;
//   title?: React.ReactNode;
//   selectable?: boolean;
//   switcherIcon?: IconType;
//   /** Set style of TreeNode. This is not recommend if you don't have any force requirement */
//   className?: string;
//   style?: React.CSSProperties;
// }
// interface EventDataNode extends DataNode {
//   expanded: boolean;
//   selected: boolean;
//   checked: boolean;
//   loaded: boolean;
//   loading: boolean;
//   halfChecked: boolean;
//   dragOver: boolean;
//   dragOverGapTop: boolean;
//   dragOverGapBottom: boolean;
//   pos: string;
//   active: boolean;
// }

export interface DataNode {
  checkable?: boolean;
  children?: DataNode[];
  disabled?: boolean;
  disableCheckbox?: boolean;
  // icon?: IconType;
  isLeaf?: boolean;
  key: string | number;
  title?: React.ReactNode;
  selectable?: boolean;
  // switcherIcon?: IconType;
  /** Set style of TreeNode. This is not recommend if you don't have any force requirement */
  className?: string;
  style?: React.CSSProperties;
}

// interface IData extends Record<string, unknown> {
//   key: string;
//   title: string;
//   disableCheckbox?: boolean;
//   children?: IData[];
// }

const data: DataNode[] = [
  {
    key: '0-0',
    title: 'parent 1',
    children: [
      {
        key: '0-0-0',
        title: 'parent 1-1',
        children: [{ key: '0-0-0-0', title: 'parent 1-1-0' }],
      },
      {
        key: '0-0-1',
        title: 'parent 1-2',
        children: [
          { key: '0-0-1-0', title: 'parent 1-2-0', disableCheckbox: true },
          { key: '0-0-1-1', title: 'parent 1-2-1' },
          { key: '0-0-1-2', title: 'parent 1-2-2' },
          { key: '0-0-1-3', title: 'parent 1-2-3' },
          { key: '0-0-1-4', title: 'parent 1-2-4' },
          { key: '0-0-1-5', title: 'parent 1-2-5' },
          { key: '0-0-1-6', title: 'parent 1-2-6' },
          { key: '0-0-1-7', title: 'parent 1-2-7' },
          { key: '0-0-1-8', title: 'parent 1-2-8' },
          { key: '0-0-1-9', title: 'parent 1-2-9' },
          { key: 1128, title: 1128 },
        ],
      },
    ],
  },
];

export const SampleARaw = ({ className }: IWithClassName) => {
  // const onExpand = (
  //   expandedKeys: (string | number)[],
  //   info: {
  //     node: EventDataNode;
  //     expanded: boolean;
  //     nativeEvent: MouseEvent;
  //   }
  // ) => {
  //   console.log('onExpand', expandedKeys);
  // };

  const onSelect = (
    selectedKeys: ReactText[],
    info: {
      event: 'select';
      selected: boolean;
      node: any; //EventDataNode;
      selectedNodes: DataNode[];
      nativeEvent: MouseEvent;
    }
  ) => {
    console.log('selected', selectedKeys, info);
    // this.selKey = info.node.props.eventKey;
  };

  const onCheck = (
    checked:
      | (string | number)[]
      | {
          checked: (string | number)[];
          halfChecked: (string | number)[];
        },
    info: any // CheckInfo
  ) => {
    console.log('onCheck', checked, info);
  };

  // const onEdit = () => {
  //   // setTimeout(() => {
  //   //   console.log('current key: ', this.selKey);
  //   // }, 0);
  // };

  // const onDel = (e) => {
  //   if (!window.confirm('sure to delete?')) {
  //     return;
  //   }
  //   e.stopPropagation();
  // };

  return (
    <Tree
      className={className}
      showLine
      checkable
      selectable={false}
      defaultExpandAll
      // onExpand={onExpand}
      // defaultSelectedKeys={this.state.defaultSelectedKeys}
      // defaultCheckedKeys={this.state.defaultCheckedKeys}
      onSelect={onSelect}
      onCheck={onCheck}
      treeData={data}
    />
  );
};
