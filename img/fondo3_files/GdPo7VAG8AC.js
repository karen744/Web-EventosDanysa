;/*FB_PKG_DELIM*/

__d("LSStoryContactSyncFromBucket",[],(function(a,b,c,d,e,f){function a(){var a=arguments,b=a[a.length-1],c=[],d=[];return b.sequence([function(a){return b.sequence([function(a){return b.forEach(b.filter(b.db.table(7).fetch(),function(a){return!0}),function(a){var b=a.update;a.item;return b({profileRingColor:void 0,profileRingState:void 0})})},function(a){return b.forEach(b.filter(b.db.table(53).fetch(),function(a){return b.i64.eq(a.bucketType,b.i64.cast([0,1]))}),function(a){var d=a.item;return c[1]=d.readState,b.i64.eq(c[1],b.i64.cast([0,1]))?c[0]=b.i64.cast([0,39423]):(b.i64.eq(c[1],b.i64.cast([0,2]))?c[2]=b.i64.cast([0,14342874]):c[2]=void 0,c[0]=c[2]),b.forEach(b.filter(b.db.table(7).fetch([[[d.ownerId]]]),function(a){return b.i64.eq(a.id,d.ownerId)&&b.i64.eq(b.i64.cast([0,1]),b.i64.cast([0,1]))}),function(a){var b=a.update;a.item;return b({profileRingState:c[1],profileRingColor:c[0]})})})}])},function(a){return b.resolve(d)}])}a.__sproc_name__="LSStoriesStoryContactSyncFromBucketStoredProcedure";e.exports=a}),null);
__d("PolarisBoostCreateAudienceScreenQuery_instagramRelayOperation",[],(function(a,b,c,d,e,f){e.exports="25262767793367761"}),null);