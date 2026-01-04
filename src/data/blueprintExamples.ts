export interface BlueprintExample {
  title: string;
  code: string;
}

export const blueprintExamples: Record<string, BlueprintExample[]> = {
  'level-blueprint': [
    {
      title: 'Event Begin Play with Spawn Actor',
      code: `Begin Object Class=/Script/BlueprintGraph.K2Node_Event Name="K2Node_Event_0"
EventReference=(MemberParent=Class'"/Script/Engine.PlayerController"',MemberName="ReceiveBeginPlay")
NodePosX=100
NodePosY=100
End Object`,
    },
    {
      title: 'Overlap Detection',
      code: `Begin Object Class=/Script/BlueprintGraph.K2Node_Event Name="K2Node_Event_0"
EventReference=(MemberParent=Class'"/Script/Engine.Pawn"',MemberName="ReceiveActorBeginOverlap")
NodePosX=100
NodePosY=100
End Object`,
    },
  ],
  'character-blueprint': [
    {
      title: 'Character Movement Setup',
      code: `Begin Object Class=/Script/BlueprintGraph.K2Node_Event Name="K2Node_Event_0"
EventReference=(MemberParent=Class'"/Script/Engine.Pawn"',MemberName="ReceiveBeginPlay")
NodePosX=100
NodePosY=100
End Object`,
    },
    {
      title: 'Input Action Handling',
      code: `Begin Object Class=/Script/BlueprintGraph.K2Node_InputActionEvent Name="K2Node_InputActionEvent_0"
InputActionName="Move_Forward"
bConsumeInput=True
NodePosX=100
NodePosY=100
End Object`,
    },
  ],
  'pawn-blueprint': [
    {
      title: 'Pawn Possession',
      code: `Begin Object Class=/Script/BlueprintGraph.K2Node_Event Name="K2Node_Event_0"
EventReference=(MemberParent=Class'"/Script/Engine.Pawn"',MemberName="ReceivePossessed")
NodePosX=100
NodePosY=100
End Object`,
    },
  ],
  'actor-blueprint': [
    {
      title: 'Actor Initialization',
      code: `Begin Object Class=/Script/BlueprintGraph.K2Node_Event Name="K2Node_Event_0"
EventReference=(MemberParent=Class'"/Script/Engine.Actor"',MemberName="ReceiveBeginPlay")
NodePosX=100
NodePosY=100
End Object`,
    },
    {
      title: 'Interaction System',
      code: `Begin Object Class=/Script/BlueprintGraph.K2Node_Event Name="K2Node_Event_0"
EventReference=(MemberParent=Class'"/Script/Engine.Actor"',MemberName="ReceiveActorBeginOverlap")
NodePosX=100
NodePosY=100
End Object`,
    },
  ],
  'interface-blueprint': [
    {
      title: 'Damage Interface',
      code: `Begin Object Class=/Script/BlueprintGraph.K2Node_Event Name="K2Node_Event_0"
EventReference=(MemberParent=Class'"/Script/Engine.Actor"',MemberName="ReceiveAnyDamage")
NodePosX=100
NodePosY=100
End Object`,
    },
  ],
  'event-graph': [
    {
      title: 'Tick-Based Updates',
      code: `Begin Object Class=/Script/BlueprintGraph.K2Node_Event Name="K2Node_Event_0"
EventReference=(MemberParent=Class'"/Script/Engine.Actor"',MemberName="ReceiveTick")
NodePosX=100
NodePosY=100
End Object`,
    },
    {
      title: 'Flow Control',
      code: `Begin Object Class=/Script/BlueprintGraph.K2Node_IfThenElse Name="K2Node_IfThenElse_0"
NodePosX=100
NodePosY=100
End Object`,
    },
  ],
  'variables-casting': [
    {
      title: 'Type Casting',
      code: `Begin Object Class=/Script/BlueprintGraph.K2Node_DynamicCast Name="K2Node_DynamicCast_0"
TargetType=Class'"/Script/Engine.Character"'
NodePosX=100
NodePosY=100
End Object`,
    },
  ],
  'best-practices': [
    {
      title: 'Organized Event Graph',
      code: `Begin Object Class=/Script/BlueprintGraph.K2Node_Event Name="K2Node_Event_0"
EventReference=(MemberParent=Class'"/Script/Engine.Actor"',MemberName="ReceiveBeginPlay")
NodePosX=100
NodePosY=100
End Object`,
    },
  ],
};
