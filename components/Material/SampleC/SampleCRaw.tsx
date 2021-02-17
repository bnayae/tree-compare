import { TreeItem, TreeView } from '@material-ui/lab';
import React from 'react';
import { IWithClassName } from '../../../interfaces';
// import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
// import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import MailIcon from '@material-ui/icons/Mail';
import { SvgIcon } from '@material-ui/core';
import { SvgIconProps } from '@material-ui/core';
import { Typography } from '@material-ui/core';

interface RenderTree {
  id: string;
  name: string;
  icon?: string;
  children?: RenderTree[];
}

const data: RenderTree = {
  id: 'root',
  name: 'Parent',
  icon: 'mail',
  children: [
    {
      id: '1',
      name: 'Child - 1',
    },
    {
      id: '3',
      name: 'Child - 3',
      children: [
        {
          id: '3-1',
          name: 'Child - 3 - 1',
        },
        {
          id: '3-2',
          name: 'Child - 3 - 2',
          icon: 'mail',
        },
      ],
    },
    {
      id: '4',
      name: 'Child - 4',
    },
    {
      id: '5',
      name: 'Child - 5',
      icon: 'mail',
    },
    {
      id: '6',
      name: 'Child - 6',
      children: [
        {
          id: '6-1',
          name: 'Child - 6 - 1',
          children: [
            {
              id: '6-1-1',
              name: 'Child - 6-1 - 1',
            },
            {
              id: '6-1-2',
              name: 'Child - 6-1 - 2',
              icon: 'mail',
            },
          ],
        },
        {
          id: '6-2',
          name: 'Child - 6 - 2',
          icon: 'mail',
        },
      ],
    },
  ],
};

export const SampleCRaw = ({ className }: IWithClassName) => {
  const [expanded, setExpanded] = React.useState<string[]>(['root', '3']);
  const [selected, setSelected] = React.useState<string[]>([]);

  const handleToggle = (event: React.ChangeEvent<{}>, nodeIds: string[]) => {
    setExpanded(nodeIds);
  };

  const handleSelect = (event: React.ChangeEvent<{}>, nodeIds: string[]) => {
    setSelected(nodeIds);
  };

  // custom data representation
  const renderTree = (nodes: RenderTree) => (
    <TreeItem
      key={nodes.id}
      nodeId={nodes.id}
      label={
        <div className="item">
          {nodes?.icon === 'mail' && <MailIcon width={20} />}
          <Typography variant="body2">{nodes.name}</Typography>
        </div>
      }
    >
      {Array.isArray(nodes.children)
        ? nodes.children.map((node) => renderTree(node))
        : null}
    </TreeItem>
  );

  const MinusSquare = (props: SvgIconProps) => {
    return (
      <SvgIcon fontSize="inherit" style={{ width: 14, height: 14 }} {...props}>
        {/* tslint:disable-next-line: max-line-length */}
        <path d="M22.047 22.074v0 0-20.147 0h-20.12v0 20.147 0h20.12zM22.047 24h-20.12q-.803 0-1.365-.562t-.562-1.365v-20.147q0-.776.562-1.351t1.365-.575h20.147q.776 0 1.351.575t.575 1.351v20.147q0 .803-.575 1.365t-1.378.562v0zM17.873 11.023h-11.826q-.375 0-.669.281t-.294.682v0q0 .401.294 .682t.669.281h11.826q.375 0 .669-.281t.294-.682v0q0-.401-.294-.682t-.669-.281z" />
      </SvgIcon>
    );
  };

  const PlusSquare = (props: SvgIconProps) => {
    return (
      <SvgIcon fontSize="inherit" style={{ width: 14, height: 14 }} {...props}>
        {/* tslint:disable-next-line: max-line-length */}
        <path d="M22.047 22.074v0 0-20.147 0h-20.12v0 20.147 0h20.12zM22.047 24h-20.12q-.803 0-1.365-.562t-.562-1.365v-20.147q0-.776.562-1.351t1.365-.575h20.147q.776 0 1.351.575t.575 1.351v20.147q0 .803-.575 1.365t-1.378.562v0zM17.873 12.977h-4.923v4.896q0 .401-.281.682t-.682.281v0q-.375 0-.669-.281t-.294-.682v-4.896h-4.923q-.401 0-.682-.294t-.281-.669v0q0-.401.281-.682t.682-.281h4.923v-4.896q0-.401.294-.682t.669-.281v0q.401 0 .682.281t.281.682v4.896h4.923q.401 0 .682.281t.281.682v0q0 .375-.281.669t-.682.294z" />
      </SvgIcon>
    );
  };

  const CloseSquare = (props: SvgIconProps) => {
    return (
      <SvgIcon
        className="close"
        fontSize="inherit"
        style={{ width: 14, height: 14 }}
        {...props}
      >
        {/* tslint:disable-next-line: max-line-length */}
        <path d="M17.485 17.512q-.281.281-.682.281t-.696-.268l-4.12-4.147-4.12 4.147q-.294.268-.696.268t-.682-.281-.281-.682.294-.669l4.12-4.147-4.12-4.147q-.294-.268-.294-.669t.281-.682.682-.281.696 .268l4.12 4.147 4.12-4.147q.294-.268.696-.268t.682.281 .281.669-.294.682l-4.12 4.147 4.12 4.147q.294.268 .294.669t-.281.682zM22.047 22.074v0 0-20.147 0h-20.12v0 20.147 0h20.12zM22.047 24h-20.12q-.803 0-1.365-.562t-.562-1.365v-20.147q0-.776.562-1.351t1.365-.575h20.147q.776 0 1.351.575t.575 1.351v20.147q0 .803-.575 1.365t-1.378.562v0z" />
      </SvgIcon>
    );
  };

  // const TransitionComponent = (props: TransitionProps) => {
  //   const style = useSpring({
  //     from: { opacity: 0, transform: 'translate3d(20px,0,0)' },
  //     to: {
  //       opacity: props.in ? 1 : 0,
  //       transform: `translate3d(${props.in ? 0 : 20}px,0,0)`,
  //     },
  //   });

  //   return (
  //     <animated.div style={style}>
  //       <Collapse {...props} />
  //     </animated.div>
  //   );
  // };

  return (
    <TreeView
      className={className}
      defaultExpanded={['root']}
      expanded={expanded}
      selected={selected}
      onNodeToggle={handleToggle}
      onNodeSelect={handleSelect}
      // defaultCollapseIcon={<ExpandMoreIcon />}
      // defaultExpandIcon={<ChevronRightIcon />}
      defaultCollapseIcon={<MinusSquare />}
      defaultExpandIcon={<PlusSquare />}
      defaultEndIcon={<CloseSquare />}
    >
      {renderTree(data)}
    </TreeView>
  );
};
